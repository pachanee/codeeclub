import { New, User } from '@codee-club/common/dist/dao';
import { Notification, NotificationDeadlineReminder, NotificationDeadlineSet, NotificationNewFollower, NotificationProfileUpdated } from '@codee-club/common/dist/notifications';
export declare const notify: (recipientIds: string[], notification: New<Notification>) => Promise<unknown>;
export declare const notificationDeadlineReminder: (date: admin.firestore.Timestamp, courseSlug: string, activitySlug: string, activityName: string, dueInDays: number) => New<NotificationDeadlineReminder>;
export declare const notificationDeadlineSet: (date: admin.firestore.Timestamp, activityId: string, activityName: string, deadline: admin.firestore.Timestamp, isUpdate: boolean) => New<NotificationDeadlineSet>;
export declare const notificationNewFollower: (date: admin.firestore.Timestamp, followerId: string, follower: DeepRequired<User>) => New<NotificationNewFollower>;
export declare const notificationProfileUpdated: (date: admin.firestore.Timestamp, userId: string, user: DeepRequired<User>) => New<NotificationProfileUpdated>;
//# sourceMappingURL=index.d.ts.map