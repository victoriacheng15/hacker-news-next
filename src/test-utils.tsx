import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store";

const AllProviders = ({ children }: { children: React.ReactNode }) => {
	return <Provider store={store}>{children}</Provider>;
};

const customRender = (
	ui: React.ReactElement,
	options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
