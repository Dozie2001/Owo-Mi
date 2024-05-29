import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:owomi/data/constants.dart';
import 'package:owomi/data/storage_manager.dart';

class AppLogic {
  getUserInformation(WidgetRef ref) async {
    // Future(() {

    // });
    var jwt = StorageManager.getJwt();
    print(jwt);

    try {
      final getUser = await Dio().get(
        "${Constant.backendUrl}/users/salt",
        options: Options(
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer $jwt",
          },
        ),
      );
      print(getUser);
      print(getUser.data);
      return getUser.data;
    } on DioException catch (e) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx and is also not 304.
      if (e.response != null) {
        // Zklogin().showSnackBar(context, 'Error');
        print(e);
        print(e.response);
      } else {
        // Something happened in setting up or sending the request that triggered an Error
        // Zklogin().showSnackBar(context, 'Error');

        print(e.message);
        // print(e.message?.message);
      }
    }
  }

  truncateString(String input) {
    if (input.length <= 8) {
      return input;
    }
    String firstPart = input.substring(0, 4);
    String lastPart = input.substring(input.length - 4);
    return '$firstPart...$lastPart';
  }

  truncateEmail(String email) {
    List<String> parts = email.split('@');
    if (parts.length != 2) {
      return email;
    }

    String username = parts[0];
    String domain = '@${parts[1]}';

    if (username.length <= 6) {
      return email;
    }

    String firstPart = username.substring(0, 4);
    String lastPart = username.substring(username.length - 4);

    return '$firstPart...$lastPart$domain';
  }
}
