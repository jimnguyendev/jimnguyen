import type { ErrorWithPreventTelemetry } from './telemetry';

export class FakeGrpcCallError
  extends Error
  implements ErrorWithPreventTelemetry
{
  preventTelemetry: boolean = false;

  constructor(callingMethodContext: string) {
    super(`Fake grpc call for ${callingMethodContext}`);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, FakeGrpcCallError.prototype);
  }
}
