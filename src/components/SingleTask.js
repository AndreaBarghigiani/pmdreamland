import * as React from 'react';

import {
	Box,
	Link,
	HStack,
	Heading,
	CircularProgress,
	CircularProgressLabel,
	Text,
	Tag,
} from '@chakra-ui/react';

import { getStatusText, getStatusColor } from '../utility';
export function SingleTask({ view = 'user', task }) {
	const { progress, name, description, status, url } = task;
	const statusText = getStatusText(status);
	const statusColor = getStatusColor(status);

	return (
		<Link
			href={url}
			bg="gray.50"
			p={5}
			borderRadius="8px"
			boxShadow="base"
			maxW="xl"
			textAlign="left"
			width="100vw"
			_hover={{
				bgColor: 'gray.100',
				boxShadow: 'none',
				textDecoration: 'none',
			}}
			isExternal
		>
			<Tag colorScheme={statusColor} mb={4} size="sm" variant="solid">
				{statusText}
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
						{description}{' '}
					</Text>
				</Box>
			</HStack>
		</Link>
	);
}
