import 'package:owomi/common_libs.dart';

class AppColors {
  /// Common
  final Color accent1 = const Color(0xFF111724);
  //
  final Color accent2 = const Color(0x0000373f);
  final Color offWhite = const Color(0xFFF8ECE5);
  final Color caption = const Color(0xFF7D7873);
  final Color body = const Color(0xFF514F4D);
  final Color greyStrong = const Color(0xFF272625);
  final Color greyMedium = const Color(0xFF9D9995);
  final Color white = Colors.white;
  final Color black = const Color(0xFF1E1B18);

  final bool isDark = false;

  // Color shift(Color c, double d) =>
  //     ColorUtils.shiftHsl(c, d * (isDark ? -1 : 1));

  ThemeData toThemeData() {
    /// Create a TextTheme and ColorScheme, that we can use to generate ThemeData
    TextTheme txtTheme =
        (isDark ? ThemeData.dark() : ThemeData.light()).textTheme;
    Color txtColor = white;
    ColorScheme colorScheme = ColorScheme(
        // Decide how you want to apply your own custom theme, to the MaterialApp
        brightness: isDark ? Brightness.dark : Brightness.light,
        primary: accent1,
        primaryContainer: accent1,
        secondary: accent2,
        secondaryContainer: accent2,
        background: offWhite,
        surface: offWhite,
        onBackground: txtColor,
        onSurface: txtColor,
        onError: Colors.white,
        onPrimary: Colors.white,
        onSecondary: Colors.white,
        error: Colors.red.shade400);

    /// Now that we have ColorScheme and TextTheme, we can create the ThemeData
    /// Also add on some extra properties that ColorScheme seems to miss
    var t =
        ThemeData.from(textTheme: txtTheme, colorScheme: colorScheme).copyWith(
      textSelectionTheme: TextSelectionThemeData(cursorColor: accent1),
      highlightColor: accent1,
    );

    /// Return the themeData which MaterialApp can now use
    return t;
  }
}
