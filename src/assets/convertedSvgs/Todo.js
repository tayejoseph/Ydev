import * as React from "react";

function SvgTodo(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 58 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill="url(#Todo_svg__pattern0)" d="M0 0h58v66H0z" />
      <defs>
        <pattern
          id="Todo_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#Todo_svg__image0" transform="scale(.01724 .01515)" />
        </pattern>
        <image
          id="Todo_svg__image0"
          width={58}
          height={66}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAABCCAYAAAAGysWEAAACyUlEQVRoBe1bS27bMBD1Ebws0EAaKBfIEbpvFrlAgiwqorvmBvYRuiukLOwb1PsscgT7Bj2CdQGJxZM4istKtUxJtKuMAYIefoZ888iRMRrPbu/16+2D1pMu9/p1NmmABwTWQGcT/TCRAnQqBAujU2GScQijbIljNRHNo4BWUUjb65A0ashoPzbXZ38vRumKPkUh7QHQLmhHfxuY1aOeJ6r4mcbF/vmLLselcf49VYVOY/0N89JYP6I/jfMVxqexvklU8SuNi+2Pr5radDe1OwMtmQxpH4WURQEt6SPdYAH6QATZsLtvYrbeMEBxiYtt/b0E2yAD9Nv42kBNwOw2Z6DXAa1LMAEtbaWQGSzG2f2JKjJsOFHFrmaxkrNE5Uvur8aU8o4BJipfp3GxYRlM2/qbZGegUUg7AAWDTYrBsGF1a/cDDABye6L0HTbPmwbjkPlIV8c8XydKP73N+VMHt7fVzkABAqVNMdq7jPnX/CH7nIGewOhuyA276nIG2ueO4kg+K704qRjP7B2o8boZHiNRQAvL6y7M/cyavO6hs2Gn0qV2BYl5zoxisnmOZnwXD2s8dtqeo3A+lXeFR+1a9N3ZgJZgieY4xnxnyzqgdROTfTbad24vRvsu7nO+APVpbR9rCaM+rOxzDWHUp7V9rCWMdrVy+VNQQikSSqliPxwWaQud2P0SSjl+0ZydEf+Il1CKhFKOH7MxRjgfXQmlVAFsCaXgWEooZYzLaXQ639ER9zSKagE6ilnPqFQYPaPxR1laGB3FrGdUKox2Nb6EUqaWlVK+KgxoU78fRe5CQBvzfnQ6WSkA1XTMGex0slJMfpENVrJSbIt4kp0fLycExyQr5f/MSjEZZLibyFIxXleyUrpno3DWimSldHJnzs6ok/YLGiRAL4iMQbYijA5ixgtSIoxeEBmDbOUvRrlhqvXsPfxR9vODfvkN3aJck6h2C/0AAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
}

export default SvgTodo;
