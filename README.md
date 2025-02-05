# mcomps components

## Running the CLI Locally

To run the CLI locally, you can follow the workflow:

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Run the development script for the CLI:

   ```bash
   pnpm shadcn:dev
   ```

3. In another terminal tab, test the CLI by running:

   ```bash
   pnpm shadcn
   ```

   To test the CLI in a specific app, use a command like:

   ```bash
   pnpm shadcn <init | add | ...> -c ~/Desktop/my-app
   ```

4. To run the tests for the CLI:

   ```bash
   pnpm --filter=shadcn test
   ```

This workflow ensures that you are running the most recent version of the registry and testing the CLI properly in your local environment.

## Testing

Tests are written using [Vitest](https://vitest.dev). You can run all the tests from the root of the repository.

```bash
pnpm test
```

Please ensure that the tests are passing when submitting a pull request. If you're adding new features, please include tests.