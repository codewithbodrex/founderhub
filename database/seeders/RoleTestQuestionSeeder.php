<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleTestQuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = now();
        $insert = [];


        $push = function($role, $texts) use (&$insert, $now) {
        $order = 1;
        foreach ($texts as $t) {
        $insert[] = [
        'role' => $role,
        'text' => $t,
        'order' => $order++,
        'created_at' => $now,
        'updated_at' => $now,
        ];
        }
        };


        $push('hustler', [
        'Saya nyaman mempresentasikan ide atau produk kepada investor atau klien.',
        'Saya aktif mencari jaringan profesional baru.',
        'Saya sering menetapkan target bisnis yang menantang untuk diri sendiri.',
        'Saya percaya diri meyakinkan orang lain tentang visi atau ide bisnis saya.',
        'Saya berani mengambil risiko untuk pertumbuhan bisnis.',
        'Saya mampu memimpin tim untuk mencapai tujuan bersama.',
        'Saya cepat mengambil keputusan saat menghadapi peluang bisnis.',
        'Saya menikmati kompetisi atau persaingan dalam dunia bisnis.',
        'Saya sering memotivasi orang lain untuk ikut berkontribusi pada proyek saya.',
        'Saya fokus pada hasil akhir dan pencapaian target bisnis.',
        ]);


        $push('hacker', [
        'Saya menikmati memecahkan bug atau error teknis yang sulit.',
        'Saya suka merancang alur kerja logis untuk aplikasi atau sistem.',
        'Saya lebih sering bekerja sendiri menyelesaikan tugas teknis.',
        'Saya fokus memastikan keamanan dan kestabilan sistem.',
        'Saya tertarik mempelajari teknologi atau bahasa pemrograman baru.',
        'Saya sering berpikir sistematis sebelum mengambil keputusan teknis.',
        'Saya senang menganalisis data untuk menemukan pola atau insight.',
        'Saya nyaman menghadapi masalah teknis kompleks tanpa bantuan orang lain.',
        'Saya suka menguji berbagai solusi sampai menemukan yang paling efisien.',
        'Saya memperhatikan detail kecil yang dapat mempengaruhi kualitas produk.',
        ]);


        $push('hipster', [
        'Saya peduli agar produk memiliki desain estetis dan mudah digunakan.',
        'Saya memperhatikan kenyamanan pengguna saat mendesain fitur.',
        'Saya suka membuat prototipe atau wireframe konsep produk.',
        'Saya peka terhadap tren desain dan branding.',
        'Saya kreatif dalam mengubah ide abstrak menjadi visual yang menarik.',
        'Saya sering mencari inspirasi dari berbagai sumber untuk menciptakan ide baru.',
        'Saya menikmati mengekspresikan ide melalui desain visual atau kreatif.',
        'Saya mampu berimajinasi untuk memecahkan masalah desain dengan cara baru.',
        'Saya suka bereksperimen dengan format, warna, dan layout yang berbeda.',
        'Saya peduli terhadap feedback pengguna untuk memperbaiki desain produk.',
        ]);


        $push('handler', [
        'Saya terampil mengatur jadwal proyek dan prioritas tugas.',
        'Saya memastikan tim memiliki pemahaman yang sama tentang visi produk.',
        'Saya efisien mengkoordinasi komunikasi antar bagian (bisnis, teknis, desain).',
        'Saya selalu memantau kemajuan tim dan menjaga target agar tercapai.',
        'Saya senang membuat perencanaan strategis dan roadmap fitur.',
        'Saya mudah menyesuaikan rencana saat menghadapi kendala tak terduga.',
        'Saya cermat dalam membagi tugas sesuai kemampuan anggota tim.',
        'Saya memperhatikan risiko proyek dan membuat mitigasi yang tepat.',
        'Saya nyaman memimpin rapat atau diskusi untuk menyelesaikan masalah tim.',
        'Saya disiplin dan memastikan semua tugas selesai tepat waktu.',
        ]);


        DB::table('role_test_questions')->insert($insert);
    }
}
