// Every topic a senior backend engineer (Node.js / TypeScript) is expected
// NEVER change an id once you start tracking, or saved progress won't match.

export const CATEGORIES = [
  {
    id: "js-node-core",
    title: "JavaScript & Node.js Internals",
    icon: "node",
    topics: [
      { id: "event-loop", name: "Event Loop (phases, microtasks vs macrotasks)" },
      { id: "libuv", name: "libuv & Thread Pool" },
      { id: "streams", name: "Streams (Readable, Writable, Transform, backpressure)" },
      { id: "buffers", name: "Buffers & Binary Data" },
      { id: "worker-threads", name: "Worker Threads" },
      { id: "cluster", name: "Cluster Module & Multi-core Scaling" },
      { id: "child-process", name: "Child Processes (spawn, exec, fork)" },
      { id: "v8-gc", name: "V8 Internals & Garbage Collection" },
      { id: "memory-leaks", name: "Memory Leaks (detection, heap snapshots)" },
      { id: "async-patterns", name: "Async Patterns (callbacks, promises, async/await, generators)" },
      { id: "error-handling", name: "Error Handling (operational vs programmer errors)" },
      { id: "cjs-esm", name: "Module Systems (CommonJS vs ESM)" },
      { id: "ts-advanced", name: "Advanced TypeScript (generics, utility types, type guards)" },
      { id: "node-perf", name: "Node.js Performance Profiling (clinic, flame graphs)" },
      { id: "closures-scope", name: "Closures, Scope & this Binding" },
      { id: "prototypes", name: "Prototypes & Inheritance" }
    ]
  },
  {
    id: "api-design",
    title: "API Design",
    icon: "api",
    topics: [
      { id: "rest", name: "REST Principles & Resource Modeling" },
      { id: "graphql", name: "GraphQL (schema, resolvers, N+1, DataLoader)" },
      { id: "grpc", name: "gRPC & Protocol Buffers" },
      { id: "websockets", name: "WebSockets & Real-time Communication" },
      { id: "sse", name: "Server-Sent Events & Long Polling" },
      { id: "versioning", name: "API Versioning Strategies" },
      { id: "pagination", name: "Pagination (offset vs cursor)" },
      { id: "rate-limiting-api", name: "Rate Limiting (token bucket, sliding window)" },
      { id: "idempotency", name: "Idempotency & Idempotency Keys" },
      { id: "openapi", name: "OpenAPI / Swagger Documentation" },
      { id: "webhooks", name: "Webhooks (design, retries, signature verification)" },
      { id: "api-gateway-t", name: "API Gateway Patterns" }
    ]
  },
  {
    id: "databases",
    title: "Databases",
    icon: "db",
    topics: [
      { id: "sql-vs-nosql", name: "SQL vs NoSQL (when to use what)" },
      { id: "indexing", name: "Indexing (B-Tree, hash, composite, covering)" },
      { id: "query-opt", name: "Query Optimization & EXPLAIN Plans" },
      { id: "transactions", name: "Transactions & ACID" },
      { id: "isolation", name: "Isolation Levels & Locking (optimistic vs pessimistic)" },
      { id: "normalization", name: "Normalization & Denormalization" },
      { id: "sharding", name: "Sharding Strategies" },
      { id: "replication", name: "Replication (master-slave, multi-master, read replicas)" },
      { id: "partitioning", name: "Table Partitioning" },
      { id: "conn-pooling", name: "Connection Pooling" },
      { id: "orm", name: "ORMs & Query Builders (Prisma, TypeORM, Knex)" },
      { id: "n-plus-1", name: "N+1 Problem & Eager Loading" },
      { id: "postgres", name: "PostgreSQL Deep Dive (MVCC, VACUUM, WAL)" },
      { id: "mongodb", name: "MongoDB (aggregation pipeline, indexes, schema design)" },
      { id: "cap", name: "CAP Theorem & PACELC" },
      { id: "migrations", name: "Schema Migrations & Zero-downtime Changes" }
    ]
  },
  {
    id: "caching",
    title: "Caching",
    icon: "cache",
    topics: [
      { id: "redis", name: "Redis (data structures, persistence, pub/sub, Lua)" },
      { id: "cache-strategies", name: "Caching Strategies (cache-aside, write-through, write-behind)" },
      { id: "cache-invalidation", name: "Cache Invalidation & TTL Design" },
      { id: "cache-stampede", name: "Cache Stampede / Thundering Herd" },
      { id: "cdn", name: "CDN & Edge Caching" },
      { id: "http-caching", name: "HTTP Caching (ETag, Cache-Control, 304)" },
      { id: "redis-cluster", name: "Redis Cluster & Sentinel (HA)" },
      { id: "distributed-cache", name: "Distributed Caching & Consistent Hashing" }
    ]
  },
  {
    id: "system-design",
    title: "System Design",
    icon: "system",
    topics: [
      { id: "load-balancing", name: "Load Balancing (L4 vs L7, algorithms)" },
      { id: "scaling", name: "Horizontal vs Vertical Scaling" },
      { id: "microservices", name: "Microservices vs Monolith (trade-offs)" },
      { id: "service-discovery", name: "Service Discovery" },
      { id: "circuit-breaker", name: "Circuit Breaker, Retry, Timeout Patterns" },
      { id: "saga", name: "Saga Pattern & Distributed Transactions" },
      { id: "event-driven", name: "Event-Driven Architecture" },
      { id: "cqrs", name: "CQRS & Event Sourcing" },
      { id: "consistent-hashing", name: "Consistent Hashing" },
      { id: "bloom-filters", name: "Bloom Filters & Probabilistic Structures" },
      { id: "distributed-locks", name: "Distributed Locks (Redlock)" },
      { id: "leader-election", name: "Leader Election & Consensus (Raft basics)" },
      { id: "estimation", name: "Back-of-envelope Estimation" },
      { id: "url-shortener", name: "Classic Designs (URL shortener, rate limiter, chat, feed)" },
      { id: "observability-design", name: "Designing for Observability & Failure" },
      { id: "concurrency-control", name: "Concurrency Control & Race Conditions" }
    ]
  },
  {
    id: "queues",
    title: "Message Queues & Streaming",
    icon: "queue",
    topics: [
      { id: "kafka", name: "Kafka (partitions, consumer groups, offsets, ordering)" },
      { id: "rabbitmq", name: "RabbitMQ (exchanges, routing, ack strategies)" },
      { id: "pubsub", name: "Pub/Sub vs Point-to-Point" },
      { id: "dlq", name: "Dead Letter Queues & Retry Strategies" },
      { id: "delivery-semantics", name: "Delivery Semantics (at-least-once, exactly-once)" },
      { id: "bullmq", name: "BullMQ / Job Queues in Node.js" },
      { id: "outbox", name: "Transactional Outbox Pattern" }
    ]
  },
  {
    id: "auth-security",
    title: "Auth & Security",
    icon: "security",
    topics: [
      { id: "jwt", name: "JWT (structure, rotation, refresh tokens, pitfalls)" },
      { id: "oauth", name: "OAuth 2.0 & OpenID Connect" },
      { id: "sessions", name: "Sessions vs Tokens (cookies, storage trade-offs)" },
      { id: "rbac", name: "RBAC / ABAC Authorization" },
      { id: "owasp", name: "OWASP Top 10" },
      { id: "sql-injection", name: "SQL Injection & Parameterized Queries" },
      { id: "xss-csrf", name: "XSS & CSRF Protection" },
      { id: "cors", name: "CORS (preflight, credentials)" },
      { id: "hashing", name: "Password Hashing (bcrypt, argon2, salting)" },
      { id: "tls", name: "HTTPS / TLS (handshake, certificates, mTLS)" },
      { id: "secrets", name: "Secrets Management (env, Vault, KMS)" },
      { id: "ddos", name: "DDoS Protection & Abuse Prevention" },
      { id: "encryption", name: "Encryption (symmetric vs asymmetric, at rest vs in transit)" }
    ]
  },
  {
    id: "devops-infra",
    title: "DevOps & Cloud Infrastructure",
    icon: "cloud",
    topics: [
      { id: "docker", name: "Docker (images, layers, multi-stage builds)" },
      { id: "kubernetes", name: "Kubernetes Basics (pods, services, deployments, HPA)" },
      { id: "cicd", name: "CI/CD Pipelines (GitHub Actions)" },
      { id: "nginx", name: "Nginx & Reverse Proxy" },
      { id: "serverless", name: "Serverless (Lambda, cold starts, trade-offs)" },
      { id: "aws-core", name: "AWS Core (EC2, S3, RDS, SQS, SNS, CloudFront)" },
      { id: "iac", name: "Infrastructure as Code (Terraform basics)" },
      { id: "monitoring", name: "Monitoring & Alerting (Prometheus, Grafana)" },
      { id: "logging", name: "Centralized Logging (structured logs, ELK)" },
      { id: "tracing", name: "Distributed Tracing (OpenTelemetry)" },
      { id: "deploy-strategies", name: "Deployment Strategies (blue-green, canary, rolling)" },
      { id: "12factor", name: "12-Factor App Principles" }
    ]
  },
  {
    id: "networking-os",
    title: "Networking & OS Fundamentals",
    icon: "network",
    topics: [
      { id: "http-versions", name: "HTTP/1.1 vs HTTP/2 vs HTTP/3" },
      { id: "tcp-udp", name: "TCP vs UDP (handshake, flow control)" },
      { id: "dns", name: "DNS Resolution & Records" },
      { id: "sockets", name: "Sockets & File Descriptors" },
      { id: "processes-threads", name: "Processes vs Threads" },
      { id: "linux", name: "Linux Essentials (signals, top, lsof, netstat)" },
      { id: "proxies", name: "Forward vs Reverse Proxies" },
      { id: "http-anatomy", name: "HTTP Anatomy (methods, status codes, headers, keep-alive)" }
    ]
  },
  {
    id: "testing",
    title: "Testing & Code Quality",
    icon: "testing",
    topics: [
      { id: "unit-testing", name: "Unit Testing (Jest / Vitest)" },
      { id: "integration-testing", name: "Integration & E2E Testing (Supertest, Testcontainers)" },
      { id: "mocking", name: "Mocking, Stubbing & Test Doubles" },
      { id: "tdd", name: "TDD Workflow" },
      { id: "load-testing", name: "Load Testing (k6, Artillery)" },
      { id: "contract-testing", name: "Contract Testing (Pact)" },
      { id: "code-review", name: "Code Review & Static Analysis" }
    ]
  },
  {
    id: "patterns",
    title: "Design Patterns & Architecture",
    icon: "patterns",
    topics: [
      { id: "solid", name: "SOLID Principles" },
      { id: "di", name: "Dependency Injection & IoC" },
      { id: "repository", name: "Repository & Unit of Work Patterns" },
      { id: "factory-singleton", name: "Factory, Singleton, Builder Patterns" },
      { id: "observer", name: "Observer & Pub/Sub Patterns" },
      { id: "middleware", name: "Middleware / Chain of Responsibility" },
      { id: "clean-arch", name: "Clean / Hexagonal Architecture" },
      { id: "ddd", name: "Domain-Driven Design Basics" },
      { id: "strategy-adapter", name: "Strategy, Adapter, Decorator Patterns" }
    ]
  },
  {
    id: "dsa",
    title: "DSA for Backend Interviews",
    icon: "dsa",
    topics: [
      { id: "big-o", name: "Big-O Analysis" },
      { id: "hashmaps", name: "Hash Maps & Sets" },
      { id: "arrays-strings", name: "Arrays, Strings & Two Pointers" },
      { id: "linked-lists", name: "Linked Lists" },
      { id: "stacks-queues", name: "Stacks & Queues" },
      { id: "trees", name: "Trees & Binary Search Trees" },
      { id: "graphs", name: "Graphs (BFS, DFS, topological sort)" },
      { id: "heaps", name: "Heaps & Priority Queues" },
      { id: "lru", name: "LRU Cache Implementation" },
      { id: "sliding-window", name: "Sliding Window & Prefix Sums" },
      { id: "recursion-dp", name: "Recursion & Basic DP" },
      { id: "sorting-searching", name: "Sorting & Binary Search" }
    ]
  }
];

export const ALL_TOPIC_IDS = CATEGORIES.flatMap((c) => c.topics.map((t) => t.id));

// Fail fast: duplicate ids would silently corrupt saved progress.
const seen = new Set();
for (const id of ALL_TOPIC_IDS) {
  if (seen.has(id)) throw new Error(`Duplicate topic id: "${id}" — fix data/topics.js`);
  seen.add(id);
}
