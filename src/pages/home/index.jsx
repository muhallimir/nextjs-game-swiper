import React from 'react';
import { Box, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import Theme from 'src/styles/theme';
import GameCard from '@common/components/cards/GameCard';
import { useSelector } from 'react-redux';
import { Header } from '@common/components/headers';
import { useRouter } from 'next/router';

SwiperCore.use([Pagination, Navigation]);

export default function Home() {
	const { games } = useSelector(({ game }) => game);
	const router = useRouter()

	const breakpoints = {
		[Theme.breakpoints.values.xs]: {
			slidesPerView: 2.25,
			spaceBetween: 8,
		},
		[Theme.breakpoints.values.sm]: {
			slidesPerView: 4.65,
			spaceBetween: 8,
		},
		[Theme.breakpoints.values.md]: {
			slidesPerView: 4.75,
			spaceBetween: 8,
		},
		[Theme.breakpoints.values.lg]: {
			slidesPerView: 6,
			spaceBetween: 16,
		},
		[Theme.breakpoints.values.xl]: {
			slidesPerView: 6,
			spaceBetween: 16,
		},
	};

	const redirectToGames = () => {
		router.push({ pathname: '/all-games' })
	}

	return (
		<>
			<Header />
			<Box sx={{
				height: '100vh',
				mt: '55px',
				px: {
					xs: '8px',
					sm: '16px',
					md: '16px',
					lg: '24px',
					xl: '24px',
				},
			}}>
				<Button
					variant='contained'
					color='primary'
					onClick={redirectToGames}
					sx={{
						animation: 'blink 1s infinite',
						'@keyframes blink': {
							'0%, 100%': { opacity: 1 },
							'50%': { opacity: 0 },
						},
					}}
				>
					SEE ALL GAMES
				</Button>
				<Box sx={{
					mt: '55px',
					width: '100%',
					pb: '50px',
					position: 'relative',
				}}>
					<Swiper
						breakpoints={breakpoints}
						pagination={{
							el: '.swiper-pagination',
							clickable: true,
							renderBullet: function (index, className) {
								return '<span class="' + className + '"></span>';
							},
						}}
						navigation={{
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						}}
					>
						{games?.map((gameDetails, i) => (
							<SwiperSlide key={i}>
								<GameCard game={gameDetails} />
							</SwiperSlide>
						))}
					</Swiper>
					<Box className="swiper-pagination" sx={{ position: 'absolute', bottom: '-10px', textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'center' }} />
				</Box>
			</Box>
		</>
	);
}
