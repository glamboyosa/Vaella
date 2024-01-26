CREATE TABLE `email` (
	`id` integer PRIMARY KEY NOT NULL,
	`email` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `email_email_unique` ON `email` (`email`);