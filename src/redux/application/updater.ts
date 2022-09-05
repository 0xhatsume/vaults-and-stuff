import { useCallback, useEffect, useState } from "react";
import { useIsWindowVisible } from "../../hooks";
import { updateBlockNumber } from ".";
import { useDispatch } from "react-redux";

// currently placeholder for other updaters
export default function Updater(): null {

    const windowVisible = useIsWindowVisible();

    useEffect(() => {
        if (!windowVisible)
            return;
    }, [windowVisible]);

    return null;
}
