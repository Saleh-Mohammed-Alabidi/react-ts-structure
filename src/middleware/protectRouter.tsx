import React from 'react';
import { Navigate } from 'react-router-dom';
import { decryptData, encryptData } from "../utils";

let userRoles:string[]=[]; 

const hasRequiredRole = (requiredRoles: string[]): boolean => {
 
  return requiredRoles.some(role => userRoles.includes(role));
};

export const setUserRoles=(roles: string[])=>{
 /**
  *  read Roles from JWT 
  */
}



interface ProtectedRouteProps {
  redirectTo: string;
  requiredRoles?: string[]; 
  children?: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ redirectTo, requiredRoles = [], children }) => {
  if (requiredRoles.length > 0 && !hasRequiredRole(requiredRoles)) {
    return <Navigate to={redirectTo} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
