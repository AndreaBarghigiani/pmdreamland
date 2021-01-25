### Day 1
That's not the real day one of the project but is the first day I decided to start documenting this journey. Today I've implemented a basic Route system that allows the user to move simply by visiting some URL (no fancy redirect based on user role at the moment).
Implemented a basic idea of private routing but still need to improve it to implement redirects in case user is not logged in, this also will protect the app from unfriendly error messages in case some information are missing (watching at you `/tasks`).

### Day 2
Fixed open modal for editing single task and also improved the login sistem. There is a bug regardint localHost and how goTrue is checking if user is logged in so for the moment I rely on a setTimeout to give time to resolve the bug.
```js
if (session?.user) {
	setTimeout(async () => {
		const publicUser = await getPublicUser(session.user);
		setPublicUser(publicUser);
	}, 100);
}
```

### Day 3
Started to work on a bulk edit solution to allow users to update all the opened tasks in one go. Kinda of complex but right now I started with creating a context just for the editing part that will keep all the tasks in a transformed way, hope this will make easier when we need to update specific part of the whole set of data.

### Day 4 
The UI for the bulk edit is working and I am able to update the local state with the user changes. Now I need to understand how to tell to db to update multiple rows at once.

### Day 5
Decided to leave for the moment the Bulk edit feature to focus on the "Copy for Slack" one. To create this I have to transform the HTML used for the tasks to create a simpler version that a MarkDown parser can easily pick up. 

### Day 6
Today has been bit slow. Tried to improve modal styles, fixed minor UI issues here and there but did't feel like doing something huge. Probably because **Copy for Slack** already works great and I've already started to use this POC for my day to day reports. There are some things that I would like to improve but the issues are there for a reason :wink:
