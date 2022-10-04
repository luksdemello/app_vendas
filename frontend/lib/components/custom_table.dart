import 'package:flutter/material.dart';
import 'package:get/get.dart';

class CustomTable extends StatelessWidget {
  const CustomTable({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: Get.width * 0.7,
      child: DataTable(columns: const [
        DataColumn(
          label: Text('Data', style: TextStyle(fontWeight: FontWeight.bold)),
        ),
        DataColumn(
          label:
              Text('Vendedor', style: TextStyle(fontWeight: FontWeight.bold)),
        ),
        DataColumn(
          label: Text('Clientes visitados',
              style: TextStyle(fontWeight: FontWeight.bold)),
        ),
        DataColumn(
          label: Text('Negócios fechados',
              style: TextStyle(fontWeight: FontWeight.bold)),
        ),
        DataColumn(
          label: Text('Valor', style: TextStyle(fontWeight: FontWeight.bold)),
        ),
      ], rows: [
        DataRow(
          cells: [
            const DataCell(
              Text(
                '22/04/2022',
              ),
            ),
            const DataCell(
              Text('Barry Allen'),
            ),
            const DataCell(
              Text('34'),
            ),
            const DataCell(
              Text('25'),
            ),
            DataCell(
              Text(15017.00.toStringAsFixed(2)),
            ),
          ],
        ),
        DataRow(
          cells: [
            const DataCell(
              Text(
                '22/04/2022',
              ),
            ),
            const DataCell(
              Text('Barry Allen'),
            ),
            const DataCell(
              Text('34'),
            ),
            const DataCell(
              Text('25'),
            ),
            DataCell(
              Text(15017.00.toStringAsFixed(2)),
            ),
          ],
        ),
        DataRow(
          cells: [
            const DataCell(
              Text(
                '22/04/2022',
              ),
            ),
            const DataCell(
              Text('Barry Allen'),
            ),
            const DataCell(
              Text('34'),
            ),
            const DataCell(
              Text('25'),
            ),
            DataCell(
              Text(15017.00.toStringAsFixed(2)),
            ),
          ],
        ),
        DataRow(
          cells: [
            const DataCell(
              Text(
                '22/04/2022',
              ),
            ),
            const DataCell(
              Text('Barry Allen'),
            ),
            const DataCell(
              Text('34'),
            ),
            const DataCell(
              Text('25'),
            ),
            DataCell(
              Text(15017.00.toStringAsFixed(2)),
            ),
          ],
        ),
        DataRow(
          cells: [
            const DataCell(
              Text(
                '22/04/2022',
              ),
            ),
            const DataCell(
              Text('Barry Allen'),
            ),
            const DataCell(
              Text('34'),
            ),
            const DataCell(
              Text('25'),
            ),
            DataCell(
              Text(15017.00.toStringAsFixed(2)),
            ),
          ],
        )
      ]),
    );
  }
}
