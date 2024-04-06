import React from "react";
import { render} from "@testing-library/react";
import BoxList from "./BoxList";


it("renders without crashing", function() {
    render(<BoxList />);
});
