import { useSelector } from "react-redux";
import { AppState } from "../store";

export function useActiveModalList() {
    return useSelector((state: AppState) => state.application.activeModalList);
}

export function useNotificationList() {
    return useSelector((state: AppState) => state.application.notificationList);
}

export function useIsStickyHeader() {
    return useSelector((state: AppState) => state.application.isHeaderSticky);
}
