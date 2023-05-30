import { Link as ReactRouterLink } from "react-router-dom";
import { linkUtils } from "./Link.utils";

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

export const Link: React.FC<LinkProps> = ({ href, children }) => {
  const isExternal = linkUtils.isExternal(href);

  return (
    <ReactRouterLink to={href} {...(isExternal && { target: "_blank" })}>
      {children}
    </ReactRouterLink>
  );
};
