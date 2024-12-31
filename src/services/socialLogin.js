export const fetchGoogleUserDetails = async (accessToken) => {
    const url = "https://www.googleapis.com/oauth2/v3/userinfo";
  
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`, // Attach access token
        },
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch user details: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("Fetched User Details:", data);
  
      return data; // Contains user profile data
    } catch (error) {
      console.error("Error fetching user details:", error);
      throw error;
    }
  };
  