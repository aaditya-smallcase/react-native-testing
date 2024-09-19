#import <React/RCTBridgeModule.h>
#import <SCGateway/SCGateway.h>
#import <SCGateway/SCGateway-Swift.h>
#import <Loans/Loans.h>

@interface RCT_EXTERN_MODULE(Testing, NSObject)

RCT_EXTERN_METHOD(multiply:(float)a withB:(float)b
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
