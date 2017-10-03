package com.digitalvisitorguide;

import android.app.Application;

import com.reactnativenavigation.NavigationApplication;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;
import com.crashlytics.android.Crashlytics; 
import io.fabric.sdk.android.Fabric;

public class MainApplication extends NavigationApplication {
@Override
   public void onCreate() {
       super.onCreate();
       Fabric.with(this, new Crashlytics());
   }

  @Override
  public boolean isDebug() {
     // Make sure you are using BuildConfig from your own application
     return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
     // Add additional packages you require here
     // No need to add RnnPackage and MainReactPackage
     return Arrays.<ReactPackage>asList(
         // eg. new VectorIconsPackage()
     );
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
     return getPackages();
  }
}
