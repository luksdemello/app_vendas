import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:google_fonts/google_fonts.dart';

class Footer extends StatelessWidget {
  const Footer({super.key});

  @override
  Widget build(BuildContext context) {
    final screenWidth = Get.width;
    return Container(
      width: screenWidth,
      height: 136,
      color: const Color(0xFF343A40),
      alignment: Alignment.center,
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Wrap(
              children: [
                RichText(
                  textAlign: TextAlign.center,
                  text: TextSpan(
                      text: 'App desenvolvido por ',
                      style: GoogleFonts.ubuntu(
                        color: const Color(0XFFF8F9FA),
                        fontSize: 16,
                      ),
                      children: [
                        TextSpan(
                          text: 'Lucas de mello',
                          style: GoogleFonts.ubuntu(
                            color: const Color(0xFF007BFF),
                            fontSize: 16,
                          ),
                        ),
                      ]),
                )
              ],
            ),
            Padding(
              padding: const EdgeInsets.only(top: 16),
              child: Center(
                child: Text(
                  'Semana de estudo Flutter Web',
                  style: GoogleFonts.ubuntu(
                    color: const Color(0XFFF8F9FA),
                    fontSize: 12,
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(top: 8.0),
              child: Wrap(
                children: [
                  RichText(
                    textAlign: TextAlign.center,
                    text: TextSpan(
                        text: 'Trabalho de estudo para apresentação para o ',
                        style: GoogleFonts.ubuntu(
                          color: const Color(0XFFF8F9FA),
                          fontSize: 12,
                        ),
                        children: [
                          TextSpan(
                            text: 'Quezada',
                            style: GoogleFonts.ubuntu(
                              color: const Color(0xFF007BFF),
                              fontSize: 12,
                            ),
                          ),
                        ]),
                  )
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
