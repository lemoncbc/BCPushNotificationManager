//
//  BCNotificationManager.m
//  BCPushNotificationManager
//
//  Created by caobuchi on 17/6/9.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "BCNotificationManager.h"

#define kBCSendNotificationToReactNative @"BCSendNotificationToReactNative"

@implementation BCNotificationManager

RCT_EXPORT_MODULE()

- (void)startObserving
{
  [[NSNotificationCenter defaultCenter] addObserver:self
                                           selector:@selector(handleSendNotificationToReactNative:)
                                               name:kBCSendNotificationToReactNative
                                             object:nil];
}

- (void)stopObserving
{
  [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"BCSendNotificationToReactNative"];
}

+ (void)sendNotificationWithOptions:(id)options
{
  
  [[NSNotificationCenter defaultCenter] postNotificationName:kBCSendNotificationToReactNative
                                                      object:self
                                                    userInfo:options];
}

- (void)handleSendNotificationToReactNative:(NSNotification *)notification
{
  NSMutableDictionary *userInfo = [notification.userInfo mutableCopy];
  userInfo[@"remote"] = @YES;
  [self sendEventWithName:@"BCSendNotificationToReactNative" body:userInfo];
}


@end
