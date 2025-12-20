"use client";

import { ConfigProvider } from "antd";

function LayoutProvider({ children }) {
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#000",
          },
        }}
      >
        {children}
      </ConfigProvider>
    </div>
  );
}

export default LayoutProvider;
