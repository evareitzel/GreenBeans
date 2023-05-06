class CreateWallets < ActiveRecord::Migration[6.1]
  def change
    create_table :wallets do |t|
      t.string :wallet_key
      t.string :password_digest

      t.timestamps
    end
  end
end
