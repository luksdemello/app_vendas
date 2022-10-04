import 'package:flutter/material.dart';
import 'package:get/get.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final screenWidth = Get.width;
    return Container(
      margin: const EdgeInsets.only(top: 16),
      height: 360,
      padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 64),
      decoration: const BoxDecoration(
          borderRadius: BorderRadius.all(Radius.circular(5)),
          color: Color(0xFFE9ECEF)),
      width: screenWidth * 0.7,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            'AppVendas',
            style: TextStyle(fontSize: 56, fontWeight: FontWeight.bold),
          ),
          const SizedBox(
            height: 8,
          ),
          const Text(
            'Analise o desempenho das suas vendas por diferentes perspectivas',
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.normal,
            ),
          ),
          const SizedBox(
            height: 16,
          ),
          const Divider(
            height: 1,
          ),
          const SizedBox(
            height: 16,
          ),
          const Text(
            'Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído em Node.',
            style: TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.normal,
            ),
          ),
          const SizedBox(
            height: 16,
          ),
          SizedBox(
            height: 48,
            width: 215,
            child: ElevatedButton(
              onPressed: () {
                Get.toNamed('/dashboard');
              },
              style: const ButtonStyle(),
              child: const Text(
                'Acessa o Dashboard',
                style: TextStyle(
                  fontSize: 20,
                ),
              ),
            ),
          )
        ],
      ),
    );
  }
}
