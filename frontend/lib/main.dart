import 'package:flutter/material.dart';
import 'package:frontend/layout/layout.dart';
import 'package:frontend/pages/dashboard/dashboard_binding.dart';
import 'package:frontend/pages/dashboard/dashboard_page.dart';
import 'package:get/get.dart';
import 'package:google_fonts/google_fonts.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        scaffoldBackgroundColor: Colors.white,
        textTheme: GoogleFonts.ubuntuTextTheme(),
      ),
      initialRoute: '/',
      getPages: [
        GetPage(name: '/', page: () => const Layout()),
        GetPage(
          name: '/dashboard',
          page: () => DashboardPage(),
          binding: DashboardBinding(),
        ),
      ],
    );
  }
}
