import 'package:flutter/material.dart';
import 'package:frontend/components/app_bar.dart';
import 'package:frontend/components/column_chart.dart';
import 'package:frontend/components/custom_table.dart';
import 'package:frontend/components/donut_chart.dart';
import 'package:frontend/components/footer.dart';
import 'package:frontend/pages/dashboard/dashboard_controller.dart';
import 'package:get/get.dart';

// ignore: must_be_immutable
class DashboardPage extends GetView<DashboardController> {
  DashboardPage({Key? key}) : super(key: key);

  int touchedIndex = -1;

  @override
  Widget build(BuildContext context) {
    final screenWidth = Get.width;

    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(children: [
            const MyAppBar(),
            SizedBox(
              width: screenWidth * 0.7,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 16),
                    child: Text(
                      controller.title,
                      style: const TextStyle(
                        color: Color(0xFFFF8400),
                        fontSize: 40,
                      ),
                    ),
                  ),
                  const SizedBox(
                    height: 30,
                  ),
                  Container(
                    margin: const EdgeInsets.only(left: 250),
                    child: const Text(
                      'Taxa  de sucesso',
                      style: TextStyle(fontSize: 22),
                    ),
                  ),
                  const SizedBox(
                    height: 30,
                  ),
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      Container(
                        margin: const EdgeInsets.only(top: 200),
                        child: const ColumnChart(),
                      ),
                      Column(
                        children: const [
                          Text(
                            'Total vendas',
                            style: TextStyle(fontSize: 22),
                          ),
                          SizedBox(
                            height: 30,
                          ),
                          DonutChart(),
                        ],
                      ),
                    ],
                  ),
                  const SizedBox(
                    height: 32,
                  ),
                  const Text(
                    'Todas vendas',
                    style: TextStyle(
                      color: Color(0xFFFF8400),
                      fontSize: 40,
                    ),
                  ),
                  const SizedBox(
                    height: 16,
                  ),
                  const CustomTable()
                ],
              ),
            ),
            const SizedBox(
              height: 150,
            ),
            const Footer(),
          ]),
        ),
      ),
    );
  }
}
