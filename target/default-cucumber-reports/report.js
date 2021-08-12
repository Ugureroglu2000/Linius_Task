$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US01_GetRequest.feature");
formatter.feature({
  "name": "Get Requests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US01"
    }
  ]
});
formatter.scenario({
  "name": "TC-01 GetLatest request",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    }
  ]
});
formatter.step({
  "name": "I send a get request \"getLatest_endpoint\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US01_GetRequestStepDefinition.i_send_a_get_request(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.IllegalArgumentException: path cannot be null\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.common.assertion.AssertParameter.notNull(AssertParameter.groovy:26)\r\n\tat io.restassured.internal.common.assertion.AssertParameter$notNull.callStatic(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallStatic(CallSiteArray.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callStatic(AbstractCallSite.java:217)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callStatic(AbstractCallSite.java:240)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1598)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:171)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat stepdefinitions.US01_GetRequestStepDefinition.i_send_a_get_request(US01_GetRequestStepDefinition.java:14)\r\n\tat ✽.I send a get request \"getLatest_endpoint\"(file:///C:/Users/fth/IdeaProjects/Linius1Cucumber/src/test/resources/features/US01_GetRequest.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Http status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US01_GetRequestStepDefinition.http_status_code_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC-02 GetNowPlaying request",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    }
  ]
});
formatter.step({
  "name": "I send a get request \"getNowPlaying_endpoint\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US01_GetRequestStepDefinition.i_send_a_get_request(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.IllegalArgumentException: path cannot be null\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.common.assertion.AssertParameter.notNull(AssertParameter.groovy:26)\r\n\tat io.restassured.internal.common.assertion.AssertParameter$notNull.callStatic(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1598)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:171)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat stepdefinitions.US01_GetRequestStepDefinition.i_send_a_get_request(US01_GetRequestStepDefinition.java:14)\r\n\tat ✽.I send a get request \"getNowPlaying_endpoint\"(file:///C:/Users/fth/IdeaProjects/Linius1Cucumber/src/test/resources/features/US01_GetRequest.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Http status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US01_GetRequestStepDefinition.http_status_code_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC-03 GetPopular request",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    }
  ]
});
formatter.step({
  "name": "I send a get request \"getPopular_endpoint\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US01_GetRequestStepDefinition.i_send_a_get_request(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.IllegalArgumentException: path cannot be null\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.common.assertion.AssertParameter.notNull(AssertParameter.groovy:26)\r\n\tat io.restassured.internal.common.assertion.AssertParameter$notNull.callStatic(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1598)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:171)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat stepdefinitions.US01_GetRequestStepDefinition.i_send_a_get_request(US01_GetRequestStepDefinition.java:14)\r\n\tat ✽.I send a get request \"getPopular_endpoint\"(file:///C:/Users/fth/IdeaProjects/Linius1Cucumber/src/test/resources/features/US01_GetRequest.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Http status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US01_GetRequestStepDefinition.http_status_code_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
});