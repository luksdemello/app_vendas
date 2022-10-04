import 'package:flutter/material.dart';
import 'package:get/get.dart';

class MyAppBar extends StatelessWidget {
  const MyAppBar({super.key});

  @override
  Widget build(BuildContext context) {
    final sizeWidth = Get.width;
    return Container(
      width: sizeWidth,
      height: 60,
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
          color: const Color(0xFFF8F9FA),
          boxShadow: [
            BoxShadow(
                color: Colors.grey.withOpacity(0.75),
                blurRadius: 4,
                offset: const Offset(0, 2))
          ],
          border: const Border(
              bottom: BorderSide(
            color: Color(0xFFDEE2E6),
            width: 1,
          ))),
      alignment: Alignment.center,
      child: SizedBox(
        width: sizeWidth * 0.7,
        child: MouseRegion(
          cursor: SystemMouseCursors.click,
          child: GestureDetector(
            onTap: () {
              Get.offAndToNamed('/');
            },
            child: const Text(
              'APPVENDAS',
              style: TextStyle(
                fontSize: 18,
                color: Colors.black,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
