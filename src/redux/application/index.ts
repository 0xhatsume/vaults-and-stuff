import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactElement } from "react";

type ModalType = "SelectWalletModal" | "WalletInfoModal";

export interface ApplicationState {
    readonly activeModalList: ModalType[];
    readonly notificationList: {
        id: number;
        type: "positive" | "negative";
        content: string | ReactElement;
    }[];
    readonly isHeaderSticky: boolean;
}

const initialState: ApplicationState = {
    activeModalList: [],
    notificationList: [],
    isHeaderSticky: false,
};

const applicationSlice = createSlice({
    name: "application",
    initialState,
    reducers: {
        showModal(state, action: PayloadAction<ModalType>) {
            const modal = action.payload;
            if (!state.activeModalList.includes(action.payload))
                state.activeModalList = [...state.activeModalList, modal];
        },
        hideModal(state, action: PayloadAction<ModalType>) {
            const modal = action.payload;
            state.activeModalList = state.activeModalList.filter(
                (activeModal) => activeModal !== modal,
            );
        },
        showNotification(
            state,
            action: PayloadAction<{
                type: "positive" | "negative";
                content: string | ReactElement;
            }>,
        ) {
            const { type, content } = action.payload;
            state.notificationList = [
                ...state.notificationList,
                {
                    id: Math.round(Math.random() * 9999999999),
                    type,
                    content,
                },
            ];
        },
        hideNotification(state, action: PayloadAction<number>) {
            const id = action.payload;
            state.notificationList = state.notificationList.filter(
                (item) => item.id !== id,
            );
        },
        setStickyHeader(state, action: PayloadAction<boolean>) {
            state.isHeaderSticky = action.payload;
        },
    },
});

export const {
    showModal,
    hideModal,
    showNotification,
    hideNotification,
    setStickyHeader,
} = applicationSlice.actions;
export default applicationSlice.reducer;
