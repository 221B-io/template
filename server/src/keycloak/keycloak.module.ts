import { Module, Injectable } from '@nestjs/common';
import { KeycloakService } from './keycloak.service';
import { KeycloakController } from './keycloak.controller';
import { KeycloakStrategy } from './keycloak.strategy'

const keycloakStrategyConfig = {
  provide: 'KEYCLOAK_STRATEGY_CONFIG',
  useValue: {
    clientID: 'client',
    realm: 'databrary',
    publicClient: 'false',
    clientSecret: 'd527f007-35d8-4956-a904-',
    sslRequired: 'none',
    authServerURL: 'http://localhost:8001/auth',
    callbackURL: 'http://localhost:8000/keycloak/auth/callback'
  }
}

@Module({
  providers: [
    KeycloakService,
    KeycloakStrategy,
    keycloakStrategyConfig
  ],
  controllers: [KeycloakController]
})
export class KeycloakModule {}
