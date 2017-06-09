//
//  BCViewController.m
//  BCPushNotificationManager
//
//  Created by caobuchi on 17/5/15.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "BCViewController.h"
#import "BCNotificationManager.h"

@interface BCViewController ()

@end

@implementation BCViewController

- (void)viewDidLoad {
  
  [super viewDidLoad];
  self.view.backgroundColor = [UIColor whiteColor];
  [self creatButton];
  
}

- (void)creatButton
{
  
  UIButton *button = [[UIButton alloc] initWithFrame:CGRectMake(self.view.center.x-50, self.view.center.y-25, 100, 50)];
  [button setTitle:@"发送通知" forState:UIControlStateNormal];
  [button setTitleColor:[UIColor redColor] forState:UIControlStateNormal];
  [button addTarget:self action:@selector(buttonClick) forControlEvents:UIControlEventTouchUpInside];
  [self.view addSubview:button];
}

- (void)buttonClick
{
  NSDictionary *dict = @{@"msg":@"成功"};//测试参数
  [BCNotificationManager sendNotificationWithOptions:dict];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
