import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
 await prisma.seller.createMany({
  data: [
    { name: 'Logan' },
    { name: 'Anakin' },
    { name: 'Barry Allen' },
    { name: 'Kal-El' },
    { name: 'Padme' },
  ]
 });

 await prisma.sale.createMany({
  data: [
    {
      sellerId: 5,
      visited: 83,
      deals: 66,
      amount: 5501.0,
      date: '2021-04-01'
    },
    {
      sellerId: 5,
      visited: 113,
      deals: 78,
      amount: 8290.0,
      date: '2021-03-31'
    },
    {
      sellerId: 1,
      visited: 36,
      deals: 12,
      amount: 6096.0,
      date: '2021-03-30'
    },
    {
      sellerId: 1,
      visited: 42,
      deals: 22,
      amount: 3223.0,
      date: '2021-03-27'
    },
    {
      sellerId: 2,
      visited: 38,
      deals: 12,
      amount: 15017.0,
      date: '2021-03-26'
    },
    {
      sellerId: 5,
      visited: 88,
      deals: 52,
      amount: 20899.0,
      date: '2021-03-21'
    },
    {
      sellerId: 3,
      visited: 95,
      deals: 6,
      amount: 12383.0,
      date: '2021-03-17'
    },
    {
      sellerId: 3,
      visited: 117,
      deals: 78,
      amount: 10748.0,
      date: '2021-03-17'
    },
    {
      sellerId: 5,
      visited: 114,
      deals: 71,
      amount: 22274.0,
      date: '2021-03-15'
    },
    {
      sellerId: 3,
      visited: 127,
      deals: 96,
      amount: 19284.0,
      date: '2021-03-14'
    },
    {
      sellerId: 1,
      visited: 44,
      deals: 13,
      amount: 6871.0,
      date: '2021-03-09'
    },
    {
      sellerId: 3,
      visited: 49,
      deals: 25,
      amount: 9034.0,
      date: '2021-03-05'
    },
    {
      sellerId: 5,
      visited: 105,
      deals: 84,
      amount: 8114.0,
      date: '2021-03-04'
    },
    {
      sellerId: 3,
      visited: 94,
      deals: 65,
      amount: 21628.0,
      date: '2021-03-03'
    },
    {
      sellerId: 2,
      visited: 97,
      deals: 46,
      amount: 21707.0,
      date: '2021-02-28'
    },
    {
      sellerId: 4,
      visited: 104,
      deals: 71,
      amount: 12652.0,
      date: '2021-02-10'
    },
    {
      sellerId: 2,
      visited: 76,
      deals: 14,
      amount:19349.0,
      date: '2021-02-09'
    },
    {
      sellerId: 3,
      visited: 154,
      deals: 78,
      amount: 21216.0,
      date: '2021-02-08'
    },
    {
      sellerId: 5,
      visited: 133,
      deals: 88,
      amount: 12561.0,
      date: '2021-02-03'
    },
    {
      sellerId: 2,
      visited: 50,
      deals: 31,
      amount: 15963.0,
      date: '2021-01-31'
    },
    {
      sellerId: 4,
      visited: 137,
      deals: 70,
      amount: 19349.0,
      date: '2021-01-25'
    },
    {
      sellerId: 2,
      visited: 53,
      deals: 33,
      amount:9103.0,
      date: '2021-01-16'
    },
    {
      sellerId: 3,
      visited: 184,
      deals: 93,
      amount: 12927.0,
      date: '2021-01-10'
    },
    {
      sellerId: 1,
      visited: 35,
      deals: 12,
      amount: 6537.0,
      date: '2021-01-08'
    },
    {
      sellerId: 4,
      visited: 93,
      deals: 55,
      amount: 19890.0,
      date: '2021-01-01'
    },
    {
      sellerId: 4,
      visited: 168,
      deals: 92,
      amount: 6299.0,
      date: '2020-12-28'
    },
    {
      sellerId: 2,
      visited: 48,
      deals: 13,
      amount: 22411.0,
      date: '2020-12-26'
    },
    {
      sellerId: 2,
      visited: 107,
      deals: 67,
      amount: 9788.0,
      date: '2020-12-24'
    },
    {
      sellerId: 3,
      visited: 106,
      deals: 62,
      amount: 18942.0,
      date: '2020-12-20'
    },
    {
      sellerId: 2,
      visited: 40,
      deals: 26,
      amount: 11731.0,
      date: '2020-12-18'
    },
    {
      sellerId: 5,
      visited: 101,
      deals: 68,
      amount: 19882.0,
      date: '2020-12-18'
    },
    {
      sellerId: 5,
      visited: 185,
      deals: 100,
      amount: 14618.0,
      date: '2020-12-17'
    },
    {
      sellerId: 1,
      visited: 82,
      deals: 47,
      amount: 7951.0,
      date: '2020-12-15'
    },
    {
      sellerId: 1,
      visited: 86,
      deals: 45,
      amount: 4147.0,
      date: '2020-12-14'
    },
    {
      sellerId: 5,
      visited: 95,
      deals: 88,
      amount: 12943.0,
      date: '2020-12-09'
    },
    {
      sellerId: 3,
      visited: 75,
      deals: 58,
      amount: 18747.0,
      date: '2020-12-02'
    },
    {
      sellerId: 2,
      visited: 96,
      deals: 50,
      amount: 12624.0,
      date: '2020-12-01'
    },
    {
      sellerId: 4,
      visited: 79,
      deals: 40,
      amount: 14770.0,
      date: '2020-11-21'
    },
    {
      sellerId: 5,
      visited: 73,
      deals: 46,
      amount: 14124.0,
      date: '2020-11-20'
    },
    {
      sellerId: 5,
      visited: 92,
      deals: 58,
      amount: 20953.0,
      date: '2020-11-20'
    },
    {
      sellerId: 1,
      visited: 43,
      deals: 30,
      amount: 9690.0,
      date: '2020-11-18'
    },
    {
      sellerId: 4,
      visited: 58,
      deals: 30,
      amount: 11396.0,
      date: '2020-11-14'
    },
    {
      sellerId: 1,
      visited: 49,
      deals: 14,
      amount: 5119.0,
      date: '2020-11-14'
    },
    {
      sellerId: 2,
      visited: 53,
      deals: 23,
      amount: 8206.0,
      date: '2020-11-12'
    },
    {
      sellerId: 2,
      visited: 49,
      deals: 25,
      amount: 8269.0,
      date: '2020-11-10'
    },
    {
      sellerId: 2,
      visited: 53,
      deals: 29,
      amount: 17984.0,
      date: '2020-11-09'
    },
    {
      sellerId: 1,
      visited: 43,
      deals: 26,
      amount: 3056.0,
      date: '2020-11-08'
    },
    {
      sellerId: 2,
      visited: 51,
      deals: 21,
      amount: 8624.0,
      date: '2020-11-06'
    },
    {
      sellerId: 3,
      visited: 64,
      deals: 41,
      amount: 10959.0,
      date: '2020-11-03'
    },
    {
      sellerId: 2,
      visited: 75,
      deals: 23,
      amount: 15883.0,
      date: '2020-10-30'
    },
    {
      sellerId: 3,
      visited: 51,
      deals: 44,
      amount: 14038.0,
      date: '2020-10-27'
    },
    {
      sellerId: 4,
      visited: 141,
      deals: 81,
      amount: 13535.0,
      date: '2020-10-26'
    },
    {
      sellerId: 3,
      visited: 135,
      deals: 98,
      amount: 17241.0,
      date: '2020-10-25'
    },
    {
      sellerId: 3,
      visited: 116,
      deals: 66,
      amount: 16415.0,
      date: '2020-10-19'
    },
    {
      sellerId: 4,
      visited: 60,
      deals: 44,
      amount: 5329.0,
      date: '2020-10-14'
    },
    {
      sellerId: 4,
      visited: 63,
      deals: 32,
      amount: 16618.0,
      date: '2020-10-07'
    },
    {
      sellerId: 4,
      visited: 176,
      deals: 100,
      amount: 5062.0,
      date: '2020-10-01'
    },
    {
      sellerId: 2,
      visited: 118,
      deals: 45,
      amount: 22235.0,
      date: '2020-09-29'
    },
    {
      sellerId: 4,
      visited: 150,
      deals: 97,
      amount: 14484.0,
      date: '2020-09-26'
    },
    {
      sellerId: 2,
      visited: 115,
      deals: 63,
      amount: 18081.0,
      date: '2020-09-24'
    },
    {
      sellerId: 5,
      visited: 159,
      deals: 88,
      amount: 16101.0,
      date: '2020-09-23'
    },
    {
      sellerId: 4,
      visited: 76,
      deals: 45,
      amount: 11150.0,
      date: '2020-09-22'
    },
    {
      sellerId: 4,
      visited: 65,
      deals: 63,
      amount: 17982.0,
      date: '2020-09-09'
    },
    {
      sellerId: 3,
      visited: 90,
      deals: 68,
      amount: 15927.0,
      date: '2020-09-08'
    },
    {
      sellerId: 1,
      visited: 22,
      deals: 12,
      amount: 9793.0,
      date: '2020-09-06'
    },
    {
      sellerId: 1,
      visited: 19,
      deals: 11,
      amount: 4185.0,
      date: '2020-09-05'
    },
    {
      sellerId: 2,
      visited: 68,
      deals: 21,
      amount: 15541.0,
      date: '2020-09-04'
    },
    {
      sellerId: 3,
      visited: 64,
      deals: 47,
      amount: 7287.0,
      date: '2020-09-04'
    },
    {
      sellerId: 4,
      visited: 153,
      deals: 92,
      amount: 17913.0,
      date: '2020-09-04'
    },
    {
      sellerId: 5,
      visited: 93,
      deals: 53,
      amount: 12648.0,
      date: '2020-09-02'
    },
    {
      sellerId: 2,
      visited: 78,
      deals: 32,
      amount: 12021.0,
      date: '2020-08-30'
    },
    {
      sellerId: 2,
      visited: 94,
      deals: 49,
      amount: 18787.0,
      date: '2020-08-29'
    },
    {
      sellerId: 1,
      visited: 54,
      deals: 28,
      amount: 3974.0,
      date: '2020-08-28'
    },
    {
      sellerId: 2,
      visited: 45,
      deals: 25,
      amount: 5681.0,
      date: '2020-08-26'
    },
    {
      sellerId: 1,
      visited: 11,
      deals: 1,
      amount: 4008.0,
      date: '2020-08-14'
    },
    {
      sellerId: 5,
      visited: 118,
      deals: 80,
      amount: 5218.0,
      date: '2020-08-13'
    },
    {
      sellerId: 2,
      visited: 52,
      deals: 21,
      amount: 21220.0,
      date: '2020-08-09'
    },
    {
      sellerId: 2,
      visited: 127,
      deals: 23,
      amount: 8831.0,
      date: '2020-08-06'
    },
    {
      sellerId: 2,
      visited: 78,
      deals: 23,
      amount: 13900.0,
      date: '2020-08-04'
    },
    {
      sellerId: 3,
      visited: 102,
      deals: 52,
      amount: 22086.0,
      date: '2020-08-03'
    },
    {
      sellerId: 3,
      visited: 54,
      deals: 53,
      amount: 15731.0,
      date: '2020-07-31'
    },
    {
      sellerId: 3,
      visited: 173,
      deals: 93,
      amount: 10816.0,
      date: '2020-07-22'
    },
    {
      sellerId: 4,
      visited: 60,
      deals: 45,
      amount: 17633.0,
      date: '2020-07-20'
    },
    {
      sellerId: 4,
      visited: 138,
      deals: 72,
      amount: 14528.0,
      date: '2020-07-19'
    },
    {
      sellerId: 5,
      visited: 147,
      deals: 96,
      amount: 21582.0,
      date: '2020-07-17'
    },
    {
      sellerId: 1,
      visited: 32,
      deals: 12,
      amount: 9751.0,
      date: '2020-07-13'
    },
    {
      sellerId: 5,
      visited: 83,
      deals: 59,
      amount: 8496.0,
      date: '2020-07-08'
    },
    {
      sellerId: 5,
      visited: 58,
      deals: 48,
      amount: 5283.0,
      date: '2020-07-07'
    },
    {
      sellerId: 4,
      visited: 55,
      deals: 35,
      amount: 20474.0,
      date: '2020-07-05'
    },
    {
      sellerId: 2,
      visited: 84,
      deals: 34,
      amount: 5787.0,
      date: '2020-07-01'
    },
    {
      sellerId: 5,
      visited: 79,
      deals: 68,
      amount: 11976.0,
      date: '2020-06-27'
    },
    {
      sellerId: 3,
      visited: 121,
      deals: 67,
      amount: 18196.0,
      date: '2020-06-16'
    },
    {
      sellerId: 1,
      visited: 26,
      deals: 14,
      amount: 4255.0,
      date: '2020-06-14'
    },
    {
      sellerId: 5,
      visited: 55,
      deals: 42,
      amount: 13249.0,
      date: '2020-06-14'
    },
    {
      sellerId: 5,
      visited: 73,
      deals: 65,
      amount: 20751.0,
      date: '2020-06-10'
    },
    {
      sellerId: 1,
      visited: 47,
      deals: 25,
      amount: 7318.0,
      date: '2020-06-04'
    },
    {
      sellerId: 4,
      visited: 72,
      deals: 60,
      amount: 15608.0,
      date: '2020-06-03'
    },
    {
      sellerId: 4,
      visited: 97,
      deals: 68,
      amount: 8901.0,
      date: '2020-06-03'
    },
    {
      sellerId: 2,
      visited: 68,
      deals: 26,
      amount: 13231.0,
      date: '2020-06-02'
    },
    {
      sellerId: 3,
      visited: 73,
      deals: 53,
      amount: 19476.0,
      date: '2020-05-22'
    },
    {
      sellerId: 4,
      visited: 28,
      deals: 23,
      amount: 20530.0,
      date: '2020-05-18'
    },
    {
      sellerId: 1,
      visited: 83,
      deals: 44,
      amount: 4864.0,
      date: '2020-05-13'
    },
    {
      sellerId: 3,
      visited: 82,
      deals: 43,
      amount: 21753.0,
      date: '2020-05-06'
    },
    {
      sellerId: 1,
      visited: 43,
      deals: 26,
      amount: 7362.0,
      date: '2020-05-03'
    },
    {
      sellerId: 2,
      visited: 54,
      deals: 23,
      amount: 10549.0,
      date: '2020-04-28'
    },
    {
      sellerId: 5,
      visited: 125,
      deals: 84,
      amount: 13333.0,
      date: '2020-04-25'
    },
    {
      sellerId: 1,
      visited: 44,
      deals: 26,
      amount: 7431.0,
      date: '2020-04-23'
    },
    {
      sellerId: 4,
      visited: 46,
      deals: 25,
      amount: 21099.0,
      date: '2020-04-19'
    },
    {
      sellerId: 4,
      visited: 42,
      deals: 28,
      amount: 7217.0,
      date: '2020-04-19'
    },
    {
      sellerId: 2,
      visited: 52,
      deals: 21,
      amount: 10107.0,
      date: '2020-04-18'
    },
    {
      sellerId: 5,
      visited: 121,
      deals: 90,
      amount: 18174.0,
      date: '2020-04-17'
    },
    {
      sellerId: 1,
      visited: 65,
      deals: 14,
      amount: 8095.0,
      date: '2020-04-12'
    },
    {
      sellerId: 5,
      visited: 107,
      deals: 74,
      amount: 11507.0,
      date: '2020-04-12'
    },
    {
      sellerId: 3,
      visited: 140,
      deals: 74,
      amount: 11709.0,
      date: '2020-04-09'
    },
    {
      sellerId: 4,
      visited: 95,
      deals: 91,
      amount: 8288.0,
      date: '2020-04-08'
    },
    {
      sellerId: 2,
      visited: 68,
      deals: 43,
      amount: 17016.0,
      date: '2020-04-07'
    },
    {
      sellerId: 4,
      visited: 21,
      deals: 20,
      amount: 17126.0,
      date: '2020-04-03'
    },
    {
      sellerId: 1,
      visited: 38,
      deals: 15,
      amount: 7957.0,
      date: '2020-03-31'
    },
    {
      sellerId: 3,
      visited: 53,
      deals: 29,
      amount: 20903.0,
      date: '2020-03-29'
    },
    {
      sellerId: 1,
      visited: 19,
      deals: 10,
      amount: 3987.0,
      date: '2020-03-28'
    },
    {
      sellerId: 2,
      visited: 78,
      deals: 34,
      amount: 20795.0,
      date: '2020-03-27'
    },
    {
      sellerId: 1,
      visited: 83,
      deals: 44,
      amount: 4938.0,
      date: '2020-03-26'
    },
    {
      sellerId: 1,
      visited: 32,
      deals: 12,
      amount: 6926.0,
      date: '2020-03-13'
    },
    {
      sellerId: 1,
      visited: 64,
      deals: 33,
      amount: 8193.0,
      date: '2020-03-13'
    },
    {
      sellerId: 3,
      visited: 39,
      deals: 39,
      amount: 10557.0,
      date: '2020-03-05'
    },
    {
      sellerId: 3,
      visited: 158,
      deals: 84,
      amount: 21601.0,
      date: '2020-03-02'
    },
    {
      sellerId: 1,
      visited: 12,
      deals: 6,
      amount: 7625.0,
      date: '2020-02-29'
    },
    {
      sellerId: 5,
      visited: 82,
      deals: 82,
      amount: 22465.0,
      date: '2020-02-27'
    },
    {
      sellerId: 3,
      visited: 68,
      deals: 56,
      amount: 12595.0,
      date: '2020-02-17'
    },
    {
      sellerId: 1,
      visited: 27,
      deals: 13,
      amount: 4636.0,
      date: '2020-02-16'
    },
    {
      sellerId: 4,
      visited: 52,
      deals: 33,
      amount: 10155.0,
      date: '2020-02-14'
    },
    {
      sellerId: 4,
      visited: 142,
      deals: 81,
      amount: 13610.0,
      date: '2020-02-13'
    },
    {
      sellerId: 5,
      visited: 81,
      deals: 45,
      amount: 15306.0,
      date: '2020-02-08'
    },
    {
      sellerId: 2,
      visited: 64,
      deals: 35,
      amount: 17460.0,
      date: '2020-02-07'
    },
    {
      sellerId: 2,
      visited: 48,
      deals: 24,
      amount: 21413.0,
      date: '2020-02-03'
    },
    {
      sellerId: 3,
      visited: 150,
      deals: 82,
      amount: 6505.0,
      date: '2020-01-26'
    },
    {
      sellerId: 4,
      visited: 138,
      deals: 95,
      amount: 7983.0,
      date: '2020-01-18'
    },
    {
      sellerId: 5,
      visited: 70,
      deals: 48,
      amount: 9564.0,
      date: '2020-01-16'
    },
    {
      sellerId: 3,
      visited: 162,
      deals: 84,
      amount: 7302.0,
      date: '2020-01-15'
    },
    {
      sellerId: 4,
      visited: 57,
      deals: 54,
      amount: 9126.0,
      date: '2020-01-12'
    },
    {
      sellerId: 4,
      visited: 78,
      deals: 60,
      amount: 5253.0,
      date: '2020-01-06'
    },
    {
      sellerId: 5,
      visited: 81,
      deals: 53,
      amount: 11553.0,
      date: '2020-01-04'
    },
    {
      sellerId: 2,
      visited: 90,
      deals: 34,
      amount: 16020.0,
      date: '2019-12-31'
    },
    {
      sellerId: 4,
      visited: 57,
      deals: 39,
      amount: 10253.0,
      date: '2019-12-28'
    },
    {
      sellerId: 4,
      visited: 90,
      deals: 53,
      amount: 14398.0,
      date: '2019-12-21'
    },
    {
      sellerId: 5,
      visited: 30,
      deals: 25,
      amount: 16429.0,
      date: '2019-12-16'
    },
    {
      sellerId: 2,
      visited: 58,
      deals: 21,
      amount: 5368.0,
      date: '2019-12-13'
    },
    {
      sellerId: 1,
      visited: 79,
      deals: 12,
      amount: 9928.0,
      date: '2019-12-13'
    },
    {
      sellerId: 3,
      visited: 98,
      deals: 77,
      amount: 8860.0,
      date: '2019-12-12'
    },
    {
      sellerId: 3,
      visited: 100,
      deals: 69,
      amount: 13335.0,
      date: '2019-12-09'
    },
    {
      sellerId: 1,
      visited: 41,
      deals: 21,
      amount: 7009.0,
      date: '2019-12-06'
    },
    {
      sellerId: 4,
      visited: 141,
      deals: 78,
      amount: 6100.0,
      date: '2019-12-04'
    },
    {
      sellerId: 5,
      visited: 52,
      deals: 36,
      amount: 7050.0,
      date: '2019-12-02'
    },
    {
      sellerId: 3,
      visited: 76,
      deals: 51,
      amount: 21591.0,
      date: '2019-12-01'
    },
    {
      sellerId: 4,
      visited: 38,
      deals: 35,
      amount: 19416.0,
      date: '2019-11-29'
    },
    {
      sellerId: 1,
      visited: 54,
      deals: 12,
      amount: 9400.0,
      date: '2019-11-26'
    },
    {
      sellerId: 1,
      visited: 43,
      deals: 25,
      amount: 4854.0,
      date: '2019-11-23'
    },
    {
      sellerId: 4,
      visited: 70,
      deals: 51,
      amount: 10740.0,
      date: '2019-11-21'
    },
    {
      sellerId: 3,
      visited: 84,
      deals: 78,
      amount: 6990.0,
      date: '2019-11-17'
    },
    {
      sellerId: 5,
      visited: 126,
      deals: 94,
      amount: 14183.0,
      date: '2019-11-17'
    },
    {
      sellerId: 5,
      visited: 89,
      deals: 89,
      amount: 17044.0,
      date: '2019-11-02'
    },
    {
      sellerId: 5,
      visited: 149,
      deals: 83,
      amount: 20988.0,
      date: '2019-11-01'
    },
    {
      sellerId: 5,
      visited: 139,
      deals: 76,
      amount: 7682.0,
      date: '2019-10-31'
    },
    {
      sellerId: 1,
      visited: 39,
      deals: 14,
      amount: 7996.0,
      date: '2019-10-29'
    },
    {
      sellerId: 1,
      visited: 44,
      deals: 25,
      amount: 5546.0,
      date: '2019-10-24'
    },
    {
      sellerId: 5,
      visited: 127,
      deals: 92,
      amount: 12347.0,
      date: '2019-10-23'
    },
    {
      sellerId: 3,
      visited: 53,
      deals: 35,
      amount: 16423.0,
      date: '2019-10-20'
    },
    {
      sellerId: 1,
      visited: 14,
      deals: 8,
      amount: 7705.0,
      date: '2019-10-16'
    },
    {
      sellerId: 2,
      visited: 71,
      deals: 18,
      amount: 6436.0,
      date: '2019-10-07'
    },
    {
      sellerId: 3,
      visited: 78,
      deals: 60,
      amount: 6723.0,
      date: '2019-10-07'
    },
  ],
 })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })