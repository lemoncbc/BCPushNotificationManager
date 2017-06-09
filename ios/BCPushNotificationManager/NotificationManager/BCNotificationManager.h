//
//  BCNotificationManager.h
//  BCPushNotificationManager
//
//  Created by caobuchi on 17/6/9.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTEventEmitter.h"

@interface BCNotificationManager : RCTEventEmitter

+ (void)sendNotificationWithOptions:(id)options;

@end
