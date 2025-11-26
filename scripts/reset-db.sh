#!/bin/bash

# Safe Database Reset Script

set -e  # Exit on any error

DB_NAME="philadelphia_melee_dev"
PSQL_PATH="/usr/local/opt/postgresql@16/bin"

echo "⚠️ Warning ⚠️"
echo ""
echo "This will DELETE the '$DB_NAME' database and all its data."
echo "This action cannot be undone."
echo ""
read -p "Are you absolutely sure? Type 'YES' (all caps) to confirm: " confirm

if [ "$confirm" != "YES" ]; then
    echo "❌ Database reset cancelled."
    exit 1
fi

echo ""
echo "🔄 Resetting database '$DB_NAME'..."

# Check if database exists before trying to drop it
if $PSQL_PATH/psql -lqt | cut -d \| -f 1 | grep -qw "$DB_NAME"; then
    echo "📝 Dropping existing database..."
    $PSQL_PATH/dropdb "$DB_NAME"
else
    echo "ℹ️ Database '$DB_NAME' doesn't exist, skipping drop..."
fi

echo "📝 Creating fresh database..."
$PSQL_PATH/createdb "$DB_NAME"

echo "✅ Database '$DB_NAME' has been reset successfully!"
echo ""
echo "💡 Next steps:"
echo "   - Run migrations if needed: pnpm payload:generate"
echo "   - Restart your dev server: pnpm dev"
