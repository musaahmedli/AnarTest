// import React from "react";

// export class ErrorBoundry extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     console.log("getDerivedStateFromError", error);
//     // Sonrakı renderdə xəta UI-nı göstərmək üçün state-i yenilə
//     return { hasError: true };
//   }

//   componentDidCatch(error) {
//     console.log(error);
//     // componentDidCatch- loglamaq ucun endpoint ler ola biler  deye bilerik ki,
//     //    error olan case de catch elediy indi loglayaq
//     //   error qaytarir
//     // normada bu hissede her hansisa bir enpoint olur ki error loglarin follow up eliyib baxmaq ucun ki bizim
//     // userlerlarda ne kimi errorlar cixir
//     //  console.log(Error) burda request gedir error gonderirlir servere
//   }

//   render() {
//     const { children } = this.props;
//     const { hasError } = this.state;
//     if (hasError) {
//       return <p>Something went wrong.Please refresh page.</p>;
//     }
//     return children;
//   }
// }
