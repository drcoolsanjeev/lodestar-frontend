import { EngagementService } from '../engagement_service/engagement_service';
import { AuthService } from '../auth_service/authentication_service';
import { VersionService } from '../version_service/version_service';
import { NotificationService } from '../notification_service/notification_service';
import { FakedEngagementService } from '../engagement_service/implementations/faked_engagement_service';
import { FakedAuthService } from '../auth_service/implementations/faked_auth_service';
import { Apiv1EngagementService } from '../engagement_service/implementations/apiv1_engagement_service';
import { Apiv1AuthService } from '../auth_service/implementations/apiv1_auth_service';
import { FakedVersionService } from '../version_service/implementations/faked_version_service';
import { Apiv1VersionService } from '../version_service/implementations/apiv1_version_service';
import { FakedNotificationService } from '../notification_service/implementations/faked_notification_service';
import { Config } from '../../schemas/config';
import { CategoryService } from "../category_service/category_service";
import { Apiv1CategoryService } from "../category_service/implementations/apiv1_category_service";
import { FakedCategoryService } from "../category_service/implementations/faked_category_service";

export type ServiceFactory = () => {
  engagementService: EngagementService;
  authService: AuthService;
  versionService: VersionService;
  notificationService: NotificationService;
  categoryService: CategoryService;
};

export const createApiV1Services = (config: Config): ServiceFactory => () => {
  return {
    authService: new Apiv1AuthService(config),
    engagementService: new Apiv1EngagementService(config.backendUrl),
    notificationService: new FakedNotificationService(),
    versionService: new Apiv1VersionService(config.backendUrl),
    categoryService: new Apiv1CategoryService(config.backendUrl),
  };
};

export interface FakedServiceFactoryParams {
  shouldUseStaticData: boolean;
}

export const createFakedServices = (
  params: FakedServiceFactoryParams
): ServiceFactory => () => {
  return {
    authService: new FakedAuthService(),
    engagementService: new FakedEngagementService(params.shouldUseStaticData),
    notificationService: new FakedNotificationService(),
    versionService: new FakedVersionService(),
    categoryService: new FakedCategoryService(),
  };
};
