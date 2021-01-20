import * as React from 'react';

import {
	Box,
	HStack,
	Heading,
	CircularProgress,
	CircularProgressLabel,
	Text,
	Tag,
} from '@chakra-ui/react';

import { getEtaText, getEtaColor } from '../utility';

export default function SingleTask({ view = 'user', task, openModal }) {
	const { progress, name, description, eta } = task;
	const etaText = getEtaText(eta);
	const etaColor = getEtaColor(eta);

	return (
		<Box
			bg="gray.50"
			p={5}
			borderRadius="8px"
			boxShadow="base"
			maxW="xl"
			textAlign="left"
			onClick={() => openModal(task)}
			width="100vw"
			_hover={{
				bgColor: 'gray.100',
				boxShadow: 'none',
				cursor: 'pointer',
				textDecoration: 'none',
			}}
			isExternal
		>
			<Tag colorScheme={etaColor} mb={4} size="sm" variant="solid">
				{etaText}
			</Tag>
			<HStack spacing={8}>
				<Box>
					<CircularProgress
						thickness="6px"
						value={progress}
						trackColor="gray.50"
					>
						<CircularProgressLabel fontWeight="bold">
							{progress}%
						</CircularProgressLabel>
					</CircularProgress>
				</Box>
				<Box maxW="85%">
					<Heading as="h3" size="sm">
						{name}
					</Heading>
					<Text fontSize="14px" isTruncated>
						{description}
					</Text>
				</Box>
			</HStack>
		</Box>
	);
}
