import { HttpLink } from "apollo-link-http";
import { withData } from "next-apollo";

const config = {
    link: new HttpLink({
        uri: "http://admin.tomekkonieczny.com/graphql"
    })
};
export default withData(config);
