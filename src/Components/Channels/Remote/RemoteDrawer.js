// import React,{useRef, useDisclosure} from 'react'
// import {
//     Button,
//     Drawer,
//     DrawerBody,
//     DrawerFooter,
//     DrawerHeader,
//     DrawerOverlay,
//     DrawerContent,
//     DrawerCloseButton,
//   } from "@chakra-ui/core";

// const RemoteDrawer = () =>  {
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const btnRef =useRef();
  
//     return (
//       <>
//         <Button ref={btnRef} variantColor="teal" onClick={onOpen}>
//           Open
//         </Button>
//         <Drawer
//           isOpen={isOpen}
//           placement="right"
//           onClose={onClose}
//           finalFocusRef={btnRef}
//         >
//           <DrawerOverlay />
//           <DrawerContent>
//             <DrawerCloseButton />
//             <DrawerHeader>Remote</DrawerHeader>
  
//             <DrawerBody>
//               <p>content</p>
//             </DrawerBody>
  
//             <DrawerFooter>

//             </DrawerFooter>
//           </DrawerContent>
//         </Drawer>
//       </>
//     );
// }

// export default RemoteDrawer
