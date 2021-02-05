import * as React from 'react';

import {
	Box,
	CircularProgress,
	CircularProgressLabel,
	Heading,
	HStack,
	Link,
	Tag,
	Text,
	Tooltip,
} from '@chakra-ui/react';

import { LinkIcon } from '@chakra-ui/icons';

import {
	getEtaText,
	getEtaColor,
	getTaskNumber,
	copyToClipboard,
} from '../utility';

export default function SingleTask({ view = 'user', task, openModal }) {
	const { progress, name, description, eta, completed, url, status } = task;
	const etaText = getEtaText(eta);
	const etaColor = getEtaColor(eta);
	const taskNumber = getTaskNumber(url);
	return (
		<Box
			bg={completed ? 'green.50' : 'gray.50'}
			p={5}
			border={completed ? '1px' : ''}
			borderColor={completed ? 'green.200' : ''}
			borderRadius="8px"
			boxShadow={completed ? 'inner' : 'base'}
			maxW="xl"
			textAlign="left"
			onClick={e => openModal(e, task)}
			width="100vw"
			_hover={{
				bgColor: 'gray.100',
				boxShadow: 'none',
				cursor: 'pointer',
				textDecoration: 'none',
			}}
		>	
			<Box mb={4}>
			{ status !== 'released' || ! completed ? 
			<Tag colorScheme={etaColor} mr={2} size="sm" variant="solid">
				{etaText}
			</Tag> : null}
			{taskNumber ? (
				<>
					<Tag
						mr={1}
						bg={'white'}
						color={'black'}
						size="sm"
						variant="solid"
						_hover={{
							bg: 'gray.800',
							color: 'white',
						}}
					>
						<Tooltip label="Go to task" placement="top">
						<Link
							href={url}
							onClick={e => e.stopPropagation()}
							isExternal
							_hover={{
								textDecoration: 'none',
							}}
						>
							{taskNumber}
						</Link>
						</Tooltip>
					</Tag>
					<Tag
						bg={'white'}
						borderRadius={20}
						color={'black'}
						size="sm"
						variant="solid"
						px={1}
						_hover={{
							bg: 'green.500',
							color: 'white',
						}}
						onClick={ (e) => {
							e.stopPropagation();
							copyToClipboard(url);
						}}
					>	
						<Tooltip label="Copy task url" placement="right">
							<LinkIcon p={'px'} />
						</Tooltip>
					</Tag>
				</>
			) : null}
			</Box>
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
