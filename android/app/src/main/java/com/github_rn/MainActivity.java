/*
 * @Author: your name
 * @Date: 2021-11-09 15:16:36
 * @LastEditTime: 2021-11-15 16:32:41
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/android/app/src/main/java/com/github_rn/MainActivity.java
 */
package com.github_rn;
+ import android.os.Bundle;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
+  @Override
+  protected void onCreate(Bundle savedInstanceState) {
+    super.onCreate(null);
+  }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "GitHub_RN";
  }
}
