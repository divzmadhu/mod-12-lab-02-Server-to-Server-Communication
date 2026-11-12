### Reflection Questions

After completing this activity, consider the following:

    1. Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?
          Re-formatting the data is important because the external API provides several properties, but my application only needs the actual fun fact. By extracting only the `text` property and sending it as `fact`, I provide the client with only the relevant information.

          A clean and minimal API response makes the data easier to understand and use, reduces unnecessary data transfer, and prevents the client from receiving information it doesn't need.

    2. In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?
          I didnt use Axios but then used fetch instead

          It is better to send a generic error message because the actual error may contain technical details that the client does not need to see. A simple message like "Could not fetch fun fact" is easier to understand. We can still see the actual error in the server terminal for debugging.

    3. How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?
    
          const language = req.query.language;

          const response = await fetch(
            `https://uselessfacts.jsph.pl/api/v2/facts/random?language=${language}`
          );
        

