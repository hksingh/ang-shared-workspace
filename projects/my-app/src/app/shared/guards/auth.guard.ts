import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const authService = inject(AuthService);
    return authService.isAuthenticated();
}

export const createAuthGuard = (requiresAuth: boolean, redirectURL: string): CanActivateFn => {
    return () => {
        const router = inject(Router);
        const authService = inject(AuthService);

        if (authService.isLoggedIn() === requiresAuth) {
            return true;
        }

        return router.createUrlTree([redirectURL]);
    };
}

export const requireAuth = (redirectURL = '/login') => createAuthGuard(true, redirectURL);
export const requireNoAuth = (redirectURL = '/dashboard') => createAuthGuard(false, redirectURL);