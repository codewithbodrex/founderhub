<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;
use App\Models\Lecture;

class VideoStreamController extends Controller
{
public function show(Request $request, Lecture $lecture)
{
    abort_unless($request->user(), 403);

    // Wajib ada path di DB
    abort_if(empty($lecture->video_url), 404, 'Video not set on lecture');

    $key  = 'private/' . ltrim($lecture->video_url, '/'); // contoh: private/videos/entrepreneur.mp4
    $disk = \Storage::disk('local');

    abort_unless($disk->exists($key), 404);

    $full = $disk->path($key);
    abort_unless(is_file($full), 404); // jangan biarkan folder lolos

    $size = filesize($full);
    $mime = 'video/mp4';

    $range = $request->header('Range');
    $start = 0; $end = $size - 1; $status = 200;
    if ($range && preg_match('/bytes=(\d+)-(\d+)?/', $range, $m)) {
        $start = (int) $m[1];
        if (isset($m[2])) $end = (int) $m[2];
        $end = min($end, $size - 1);
        $status = 206;
    }
    $len = $end - $start + 1;

    return response()->stream(function () use ($full, $start, $len) {
        $chunk = 1024 * 1024;
        $fh = fopen($full, 'rb'); fseek($fh, $start);
        $left = $len;
        while ($left > 0 && !feof($fh)) {
            $read = $left > $chunk ? $chunk : $left;
            echo fread($fh, $read); flush(); $left -= $read;
        }
        fclose($fh);
    }, $status, [
        'Content-Type'   => $mime,
        'Accept-Ranges'  => 'bytes',
        'Content-Length' => $len,
        'Cache-Control'  => 'no-store',
        'Content-Range'  => $status === 206 ? "bytes $start-$end/$size" : null,
    ]);
}
}
