class BankAccount
  @@no_of_users = 0
  attr_reader :deposit_ck
  attr_reader :deposit_sv
  attr_reader :withdrawal_ck
  attr_reader :withdrawal_sv
  attr_reader :generate_account

  def initialize (ck_funds,sv_funds)
    @@no_of_users +=1
    @account_user = generate_account
    @ck_funds = ck_funds
    @sv_funds = sv_funds
    @interest_rate = 0.01
    puts "Welcome to the Dragon's Hoard Bank, where your gold rests with the Guardian Dragon."
    puts "You are account holder # #{@@no_of_users}."
    puts "Your checking account number is #{@ck_act}."
    puts "Your savings account number is #{@sv_act}."
    self
  end

  def deposit_ck(val)
    @ck_funds += val
    puts "The dragon smiles upon your deposit into your checking account. You have #{@ck_funds} gp."
    self
  end

  def deposit_sv(val)
    @sv_funds += val
    puts "The dragon smiles upon your deposit. You have #{@sv_funds} gp."
    self
  end

  def withdrawal_sv(val)
    if (@sv_funds -val) < 0
      puts "YOU DO NOT HAVE THAT MUCH GOLD!! THE DRAGON EATS YOU!!"
    else
      @sv_funds -= val
    end
    self
  end

  def withdrawal_ck(val)
    if (@ck_funds - val) < 0
      puts "YOU DO NOT HAVE THAT MUCH GOLD!! THE DRAGON EATS YOU!!"
    else
      @ck_funds -= val
    end
    self
  end

  def get_balance
    if @ck_funds == 0
      puts "You currently have #{@sv_funds} gp from your savings account. It currently rests under the dragon's belly."
    elsif @sv_funds == 0
      puts "You currently have #{@ck_funds} gp from your checking account. It currently rests under the dragon's legs."
    else
      puts "You currently have #{@sv_funds+@ck_funds} gp from both your savings and checking accounts. It currently rests under the dragon's body."
    end
    self
  end

  private
  def generate_account
    @ck_act = Array.new(16).map { rand(0..9) }.join
    @sv_act = Array.new(16).map { rand(0..9) }.join
    self
  end
end

termicius = BankAccount.new(100,1000).deposit_sv(1000).withdrawal_ck(16).get_balance.withdrawal_sv(100).deposit_ck(1000).get_balance
dama = BankAccount.new(850,1000).deposit_sv(230).withdrawal_ck(100).get_balance.withdrawal_sv(500).deposit_ck(1545).get_balance
