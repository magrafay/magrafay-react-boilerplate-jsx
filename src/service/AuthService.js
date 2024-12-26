import axiosHttp from "helpers/AxiosHttp";
import Cookies from "js-cookie"; // Importing js-cookie to manage cookies
import Logger from "helpers/Logger"; // Logging utility

class Auth {
  constructor(apiInstance = axiosHttp) {
    this.api = apiInstance; // Allow swapping the API instance for testing
  }

  // Utility function to handle token storage
  static setToken(token) {
    Cookies.set("token", token);
  }

  // Utility function to handle error responses
  static handleError(error, defaultMessage) {
    if (error.response) {
      return {
        success: false,
        status: error.response.status,
        message: error.response.data?.message || defaultMessage,
      };
    } else {
      return {
        success: false,
        status: 500,
        message: "Network error or server is unreachable.",
      };
    }
  }

  // Method to register a new user
  async registerUser(profile) {
    if (!profile.username || !profile.password || !profile.role || !profile.id) {
      return {
        success: false,
        status: 400,
        message: "Missing required fields: username, password, role, or id",
      };
    }

    try {
      const response = await this.api.post("/auth/register", {
        username: profile.username,
        password: profile.password,
        role: profile.role,
        id: profile.id,
      });

      return {
        success: true,
        status: response.status,
        message: response.data.message,
      };
    } catch (error) {
      Logger.error("Error registering user:", error);
      return Auth.handleError(error, "An error occurred during registration");
    }
  }

  async refreshToken() {
    try {
      const response = await this.api.post(
        "/auth/refresh-token",
        {},
        {
          withCredentials: true, // Optional: Use this if you still want to send cookies
        }
      );

      const newAccessToken = response.data.accessToken;
      Auth.setToken(newAccessToken); // Save the new token
      return newAccessToken;
    } catch (error) {
      Logger.error("Failed to refresh token:", error);
      return null;
    }
  }

  async loginUser(credentials) {
    try {
      const response = await this.api.post(
        "/auth/login",
        {
          username: credentials.username ?? "",
          password: credentials.password ?? "",
        },
        {
          withCredentials: true,
        }
      );

      Auth.setToken(response.data.token);

      return {
        success: true,
        status: response.status,
        token: response.data.token,
        user: response.data.user,
        message: response.data.message,
      };
    } catch (error) {
      Logger.error("Error logging in user:", error);
      return Auth.handleError(error, "An error occurred during login");
    }
  }

  async getUsersByRole(role) {
    try {
      const response = await this.api.post("/auth/usersByRole", { role: role ?? "" });

      return {
        success: true,
        status: response.status,
        users: response.data.users,
      };
    } catch (error) {
      Logger.error("Error fetching users by role:", error);
      return Auth.handleError(error, "An error occurred while retrieving users");
    }
  }

  async deleteUserByUsername(username) {
    try {
      const response = await this.api.delete("/auth/delete_user", {
        data: { username: username ?? "" },
      });

      return {
        success: true,
        status: response.status,
        message: response.data.message,
      };
    } catch (error) {
      Logger.error("Error deleting user:", error);
      return Auth.handleError(error, "An error occurred while deleting the user");
    }
  }

  // Other methods remain similar, utilizing this.api for API calls and static utility functions
}

export default Auth;
