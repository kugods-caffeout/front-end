export default function getBrandSizeTable(brand: string) {
	switch (brand) {
		case '스타벅스':
			return [
				{
					size: '숏',
					volume: 8,
				},
				{
					size: '톨',
					volume: 12,
				},
				{
					size: '그란데',
					volume: 16,
				},
				{
					size: '벤티',
					volume: 20,
				},
				{
					size: '솔로',
					volume: 4,
				},
				{
					size: '더블',
					volume: 7,
				},
				{
					size: '보틀',
					volume: 7,
				},
			];
		case '공차':
			return [
				{
					size: 'L',
					volume: 16,
				},
				{
					size: 'J',
					volume: 22,
				},
			];
		case '이디야':
			return [
				{
					size: '레귤러',
					volume: 14,
				},
				{
					size: '엑스트라',
					volume: 22,
				},
				{
					size: '병음료',
					volume: 0,
				},
			];
		case '탐앤탐스':
			return [
				{
					size: '0',
					volume: 0,
				},
				{
					size: '390',
					volume: 390,
				},
				{
					size: '40',
					volume: 40,
				},
				{
					size: '300',
					volume: 300,
				},
				{
					size: '430',
					volume: 430,
				},
				{
					size: '400',
					volume: 400,
				},
				{
					size: '50',
					volume: 50,
				},
				{
					size: '310',
					volume: 310,
				},
				{
					size: '470',
					volume: 470,
				},
				{
					size: '410',
					volume: 410,
				},
				{
					size: '30',
					volume: 30,
				},
			];
		case '메가커피':
			return [
				{
					size: '20oz',
					volume: 20,
				},
				{
					size: '24oz',
					volume: 24,
				},
				{
					size: '5oz',
					volume: 5,
				},
				{
					size: '10oz',
					volume: 10,
				},
				{
					size: '32oz',
					volume: 32,
				},
				{
					size: '2oz',
					volume: 2,
				},
			];
		case '커피빈':
			return [
				{
					size: '스몰',
					volume: 12,
				},
				{
					size: '레귤러',
					volume: 16,
				},
				{
					size: '라지',
					volume: 20,
				},
			];
		case '할리스':
			return [
				{
					size: 'Regular',
					volume: 12,
				},
				{
					size: 'Grande',
					volume: 16,
				},
			];
		case '컴포즈커피':
			return [
				{
					size: 'One size',
					volume: 20,
				},
			];
		case '투썸플레이스':
			return [
				{
					size: '레귤러',
					volume: 12,
				},
				{
					size: '라지',
					volume: 16,
				},
			];
	}
}
