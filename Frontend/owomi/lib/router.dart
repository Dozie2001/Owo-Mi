import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:owomi/ui/screens/onboarding/google_sign_in.dart';
import 'package:owomi/ui/screens/onboarding/onboarding.dart';
import 'package:owomi/ui/screens/savings/savings_form.dart';
import 'package:owomi/ui/screens/scafold/scafold.dart';

/// Shared paths / urls used across the app
class ScreenPaths {
  // static String splash = '/';
  static String onboarding = '/';
  static String googlesignin = '/googlesignin';
  static String scafold = '/scafold';
  static String savingsForm = '/savingsForm';
}

final appRouter = GoRouter(
  // redirect: _handleRedirect,
  routes: [
    AppRoute(ScreenPaths.onboarding, (s) => const OnboardingScreen()),
    AppRoute(
      ScreenPaths.googlesignin,
      (s) => GoogleSignInPage(
        transaction: s.uri.queryParameters["transaction"],
      ),
    ),
    // AppRoute(
    //     ScreenPaths.splash,
    //     (_) => Container(
    //           color: Colors.purple,
    //         )),
    AppRoute(ScreenPaths.scafold, (s) => const Scafold()),
    AppRoute(
      ScreenPaths.savingsForm,
      (s) => SavingsFormScreen(
        savingType: s.uri.queryParameters["savingsType"],
        savingName: s.uri.queryParameters["savingsName"],
        googleRedirect: s.uri.queryParameters["googleRedirect"],
      ),
    ),
  ],
);

class AppRoute extends GoRoute {
  AppRoute(String path, Widget Function(GoRouterState s) builder,
      {List<GoRoute> routes = const [], this.useFade = true})
      : super(
          path: path,
          routes: routes,
          pageBuilder: (context, state) {
            final pageContent = Scaffold(
              body: builder(state),
              resizeToAvoidBottomInset: false,
            );
            if (useFade) {
              return CustomTransitionPage(
                key: state.pageKey,
                child: pageContent,
                transitionsBuilder:
                    (context, animation, secondaryAnimation, child) {
                  return FadeTransition(opacity: animation, child: child);
                },
              );
            }
            return CupertinoPage(child: pageContent);
          },
        );
  final bool useFade;
}

// String? _handleRedirect(GoRouterState state) {
//   // Prevent anyone from navigating away from `/` if app is starting up.
//   if (!appLogic.isBootstrapComplete && state.location != ScreenPaths.splash) {
//     return ScreenPaths.splash;
//   }
//   debugPrint('Navigate to: ${state.location}');
//   return null; // do nothing
// }
