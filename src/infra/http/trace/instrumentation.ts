import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { OTTracePropagator } from '@opentelemetry/propagator-ot-trace';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { FastifyInstrumentation } from '@opentelemetry/instrumentation-fastify';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';

export default function init(service: string, environment?: string) {
  const exporter = new OTLPTraceExporter({
    url: process.env.ASPECTO_URL,
    headers: {
      Authorization: process.env.ASPECTO_AUTH,
    },
  });

  const processor = new SimpleSpanProcessor(exporter);

  const provider = new NodeTracerProvider({
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: service,
      [SemanticResourceAttributes.DEPLOYMENT_ENVIRONMENT]: environment
    })
  });

  provider.addSpanProcessor(processor);

  provider.register({ propagator: new OTTracePropagator() })

  registerInstrumentations({
    instrumentations: [new FastifyInstrumentation(), new HttpInstrumentation()],
    tracerProvider: provider
  })
  
  const tracer = provider.getTracer(service)
  
  return { tracer }
}
