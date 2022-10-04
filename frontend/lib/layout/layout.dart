import 'package:flutter/material.dart';
import 'package:frontend/components/app_bar.dart';
import 'package:frontend/components/footer.dart';
import 'package:frontend/pages/home/home_page.dart';

class Layout extends StatelessWidget {
  const Layout({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(children: [
            const MyAppBar(),
            const HomePage(),
            Container(
                margin: const EdgeInsets.only(top: 408), child: const Footer()),
          ]),
        ),
      ),
    );
  }
}
