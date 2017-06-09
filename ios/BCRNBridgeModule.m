//
//  BCRNBridgeModule.m
//  BCPushNotificationManager
//
//  Created by caobuchi on 17/6/9.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "BCRNBridgeModule.h"
#import "AppDelegate.h"
#import "BCViewController.h"

@implementation BCRNBridgeModule

RCT_EXPORT_MODULE(BCRNBridgeModule)

RCT_EXPORT_METHOD(openNativeView)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    
    BCViewController *VC = [[BCViewController alloc] init];
    [app.rootNavigationController pushViewController:VC animated:YES];
  });

}

RCT_EXPORT_METHOD(pop:(RCTResponseSenderBlock)callback)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    [app.rootNavigationController popViewControllerAnimated:YES];
  });
  NSArray *arr = @[@"1"];
  callback(arr);
}

@end
